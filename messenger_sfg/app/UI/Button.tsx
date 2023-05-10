'use client'

import clsx from 'clsx'
import React, {FC} from "react";


interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined
    fullWidth?: boolean
    children?: React.ReactNode
    onClick?: () => void
    secondary?: boolean
    danger?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
                                           type,
                                           danger,
                                           disabled,
                                           onClick,
                                           secondary,
                                           fullWidth,
                                           children

                                       }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-md
                px-3
                py-2
                text-sm
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
            `,
                disabled && 'opacity-50 cursor-default',
                fullWidth && 'w-full',
                secondary ? 'text-gray-900' : 'text-white',
                danger && 'bg-red-500 hover:bg-red-600 focus-visible:outline-red-600',
                !secondary && !danger && 'bg-green-500 hover:bg-green-600 focus-visible:outline-green-600'
                )}
        >
            {children}
        </button>
    );
};

export default Button;