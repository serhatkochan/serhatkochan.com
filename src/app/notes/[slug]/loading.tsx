import {NoteLayout} from "components/notes/NoteLayout";

export default function Loading() {
    return (
        <NoteLayout
            meta={{
                title: "",
                description: "",
                date: "",
            }}
            previousPathname="/notes"
        >
            <div className="xl:relative">
                <div className="mx-auto max-w-2xl animate-pulse">
                    <div className="flex items-center gap-6">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"/>
                        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"/>
                    </div>

                    <div className="mt-6">
                        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"/>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-10/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-9/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"/>
                        <div className="h-4 w-11/12 bg-gray-200 dark:bg-gray-700 rounded"/>
                    </div>

                    <hr className="my-12"/>

                    <div className="group block">
                        <div className="flex items-center">
                            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"/>
                            <div className="ml-6">
                                <div className="h-6 w-[500px] bg-gray-200 dark:bg-gray-700 rounded"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NoteLayout>
    );
} 