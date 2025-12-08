import classNames from "classnames";
import styles from './Button.module.css'

export const Button = ({ 
    value, 
    handler, 
    disabled, 
    className, 
    variant = "primary",
    size = "m", 
    color, 
    ...props
}) => {
    return (
        <button 
            className={classNames(
                styles.button,
                styles[variant],
                styles[size],
                className
            )}
            style={color ? { backgroundColor: color } : undefined}
            onClick={handler}
            disabled={disabled}
            {...props}
        >
            {value}
        </button>
    );
};