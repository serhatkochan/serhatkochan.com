import Container from "components/Container";

export default function Loading() {
    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl animate-pulse">
                    <div className="h-12 w-1/2 bg-gray-200 rounded-lg dark:bg-gray-700"/>
                    <div className="mt-4 h-6 w-3/4 bg-gray-200 rounded-lg dark:bg-gray-700"/>
                    <div className="mt-6 flex gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-5 w-5 bg-gray-200 rounded-full dark:bg-gray-700"/>
                        ))}
                    </div>
                </div>
            </Container>
            <div className="my-8">
                <div className="hide-scrollbar flex flex-nowrap gap-8 overflow-x-auto py-4 px-8">
                    {[...Array(22)].map((_, i) => (
                        <div key={i} className="aspect-[9/10] w-44 flex-none animate-pulse overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700" />
                    ))}
                </div>
            </div>
            <Container className="mt-12">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-20">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="h-5 w-20 bg-gray-200 rounded dark:bg-gray-700"/>
                                    <div className="h-5 w-16 bg-gray-200 rounded dark:bg-gray-700"/>
                                </div>
                                <div className="mt-3">
                                    <div className="h-7 w-full bg-gray-200 rounded dark:bg-gray-700"/>
                                </div>
                                <div className="mt-4 space-y-3">
                                    <div className="h-4 w-full bg-gray-200 rounded dark:bg-gray-700"/>
                                    <div className="h-4 w-11/12 bg-gray-200 rounded dark:bg-gray-700"/>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="h-5 w-24 bg-gray-200 rounded dark:bg-gray-700"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-20">
                        <div className="rounded-2xl border border-zinc-700/40 p-6 animate-pulse">
                            <h2 className="flex items-center text-sm font-semibold mb-6">
                                <div className="h-5 w-5 bg-gray-200 rounded dark:bg-gray-700 mr-3"/>
                                <div className="h-5 w-24 bg-gray-200 rounded dark:bg-gray-700"/>
                            </h2>
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center">
                                            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50"/>
                                        </div>
                                        <div className="flex min-w-0 flex-col justify-center flex-1">
                                            <div className="h-4 w-40 bg-gray-200 rounded dark:bg-gray-700 mb-2"/>
                                            <div className="h-3.5 w-32 bg-gray-200 rounded dark:bg-gray-700 opacity-50"/>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <div className="h-3.5 w-20 bg-gray-200 rounded dark:bg-gray-700 opacity-50"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
} 