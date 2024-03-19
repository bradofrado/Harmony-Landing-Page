import { getClass } from "../../utils"
import { cooper } from "../../utils/fonts"

export const Header: React.FunctionComponent<{children: React.ReactNode, level?: 1 | 2 | 3, className?: string}> = ({children, level=2, className}) => {
    const levelClass = {
        1: 'heading',
        2: 'heading-2',
        3: 'heading-3',
    }
    return (
        <h1 className={getClass(className, levelClass[level], cooper.className)}>{children}</h1>
    )
}