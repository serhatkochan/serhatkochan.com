import {PageLayout} from "components/PageLayout";

export default function Loading() {
    return (
        <PageLayout
            title=""
            intro=""
        >
            <div className="animate-pulse">
                {/* Başlık ve intro */}
                <div className="space-y-4">
                    <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg"/>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                </div>

                {/* Şimdi bölümü */}
                <div className="mt-16">
                    <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded"/>
                    <div className="mt-2 h-5 w-64 bg-gray-200 dark:bg-gray-700 rounded"/>
                </div>

                {/* Şimdiki projeler grid */}
                <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="space-y-4">
                            <div className="aspect-[3/2] w-full bg-gray-200 dark:bg-gray-700 rounded-2xl"/>
                            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"/>
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                                <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Geçmiş bölümü */}
                <div className="mt-24">
                    <div className="h-7 w-24 bg-gray-200 dark:bg-gray-700 rounded"/>
                    <div className="mt-2 h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded"/>
                </div>

                {/* Geçmiş projeler grid */}
                <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="space-y-4">
                            <div className="aspect-[3/2] w-full bg-gray-200 dark:bg-gray-700 rounded-2xl"/>
                            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"/>
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                                <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
} 