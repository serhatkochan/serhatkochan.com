import type { MetadataRoute } from 'next'
import { notesApi } from 'lib/notesApi'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://serhatkochan.com'
    
    // Tüm notları al
    const notes = await notesApi.getNotes()
    
    // Tüm etiketleri al
    const tags = await notesApi.getAllTags()
    
    // Ana sayfalar
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/notes`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/creating`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]
    
    // Not sayfaları
    const notePages = notes.map((note) => ({
        url: `${baseUrl}/notes/${note.slug}`,
        lastModified: new Date(note.lastEditedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))
    
    // Etiket sayfaları
    const tagPages = tags.map((tag) => ({
        url: `${baseUrl}/tags/${tag}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))
    
    return [...staticPages, ...notePages, ...tagPages]
}
