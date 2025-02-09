import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    {/* Replacing inline SVG with an external image */}
                    <img src="https://raw.githubusercontent.com/kazisean/finwise-saas-landing-page/refs/heads/main/public/images/laptop-svgrepo-com.png" alt="Laptop Icon" width="30" />
                </div>
                <div>
                    <div className="text-xs">
                        Launch Now...
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        Web App
                    </div>
                </div>
            </button>
        </a>
    )
}

export default PlayStoreButton
