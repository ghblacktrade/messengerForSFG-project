'use client'
import {InputProps} from "@/app/components/inputs/inputs.interface";
import {clsx} from 'clsx'
import React from "react";

const Input: React.FC<InputProps> = ({
                                         label,
                                         id,
                                         errors,
                                         type,
                                         register,
                                         disabled,
                                         required
                                     }) => {
    return (
        <div>
            <label
                className='
                    block
                    text-sm
                    fort-medium
                    leading-6
                    text-gray-900
            '
                htmlFor={id}
            >
                {label}
            </label>
            <div className='mt-2'>
                <input id={id}
                       type={type}
                       autoComplete={id}
                       disabled={disabled}
                       {...register(id, {required})}
                       className={clsx(`
                            form-input
                            block
                            w-full
                            rounded-md
                            border-0
                            py-1.5
                            text-gray-900
                            ring-1
                            ring-inset
                            ring-gray-300
                            placeholder:text-gray-400
                            focus:ring-2
                            focus:ring-inset
                            focus:ring-green-600
                            sm:text-sm
                            sm:leading-6
                       `,
                           errors[id] && 'focus:ring-red-500',
                           disabled && 'opacity-50 cursor-default'
                       )}
                />
            </div>

        </div>
    );
};

export default Input;