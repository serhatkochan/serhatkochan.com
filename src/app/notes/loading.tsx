import {PageLayout} from "components/PageLayout";

export default function Loading() {
    return (
        <PageLayout
            title="Yazılım, ürün geliştirme ve diğer şeyler üzerine notlar."
            intro="Programlama, ürün geliştirme, liderlik, seyahat ve diğer rastgele şeyler hakkındaki tüm düşüncelerim."
        >
            <div className="animate-pulse">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Etiketler</h3>
                <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm h-7 w-16"
                        />
                    ))}
                </div>
            </div>

            <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                <div className="flex max-w-3xl flex-col space-y-16">
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="relative flex animate-pulse">
                            {/* Sol taraf - Tarih */}
                            <div className="mr-8 w-24">
                                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"/>
                            </div>
                            
                            {/* Sağ taraf - İçerik */}
                            <div className="flex-1">
                                {/* Başlık */}
                                <div className="h-8 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded"/>
                                
                                {/* Açıklama */}
                                <div className="mt-4 space-y-3">
                                    <div className="h-5 w-full max-w-2xl bg-gray-200 dark:bg-gray-700 rounded"/>
                                    <div className="h-5 w-11/12 max-w-2xl bg-gray-200 dark:bg-gray-700 rounded"/>
                                </div>
                                
                                {/* Notu okuyun */}
                                <div className="mt-4">
                                    <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded"/>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
} 