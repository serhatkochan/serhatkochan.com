import {HTMLAttributes} from 'react';
import clsx from 'clsx';

const Container = ({children, className, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={clsx("sm:px-8", className)} {...props}>
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container;