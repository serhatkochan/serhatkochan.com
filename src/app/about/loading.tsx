import Container from "components/Container";

export default function Loading() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="animate-pulse grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <div className="aspect-square rotate-3 rounded-2xl bg-gray-200 dark:bg-gray-700"/>
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    {/* Başlık ve hakkımda */}
                    <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg"/>
                    <div className="mt-6 space-y-4">
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                    </div>
                    
                    {/* Sosyal medya ikonları */}
                    <div className="mt-6 flex gap-6">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full"/>
                        ))}
                    </div>

                    {/* İş deneyimi bölümü */}
                    <div className="mt-12">
                        <div className="h-7 w-32 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="mt-6 space-y-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                            ))}
                        </div>
                    </div>

                    {/* İzlemeye değer videolar */}
                    <div className="mt-12">
                        <div className="h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="mt-6 space-y-3">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"/>
                            ))}
                        </div>
                    </div>

                    {/* Kitaplar */}
                    <div className="mt-12">
                        <div className="h-7 w-64 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="mt-6 space-y-3">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"/>
                            ))}
                        </div>
                    </div>

                    {/* Bloglar */}
                    <div className="mt-12">
                        <div className="h-7 w-44 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="mt-6 space-y-3">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"/>
                            ))}
                        </div>
                    </div>

                    {/* Alıntı */}
                    <div className="mt-12">
                        <div className="h-7 w-48 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="mt-8 space-y-4">
                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                            <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
} 