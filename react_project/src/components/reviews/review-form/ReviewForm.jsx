import { useReducer } from 'react';
import { Counter } from "../../counter/Counter";
import { Button } from '../../button/Button.jsx'
import classNames from "classnames";
import styles from './ReviewForm.module.css';

const initialState = {
    name: "",
    text: "",
    rating: 1,
}

function reviewFormReducer(state, action) {
    switch (action.type) {
        case "setName":
            return {...state, name: action.payload};
        case "setText":
            return {...state, text: action.payload};
        case "setRating":
            return {...state, rating: action.payload};
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReducer(reviewFormReducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit review:", form);
        dispatch({ type: 'reset' });
    };

    const handleClear = () => {
        dispatch({ type: "reset" });
    };

    const incrementRating = () => {
        dispatch({
            type: "setRating",
            payload: Math.min(5, form.rating + 1),
        });
    };

    const decrementRating = () => {
        dispatch({
            type: "setRating",
            payload: Math.max(1, form.rating - 1),
        });
    };
 
    return (
        <form onSubmit={handleSubmit} className={classNames(styles['reviewForm'])}>
            <div className={classNames(styles['reviewWrapper'])}>
                <input 
                    type="text"
                    className={classNames(styles['inputForm'])}
                    value={form.name} 
                    placeholder='Your name'
                    onChange={(e) => 
                        dispatch({type: "setName", payload: e.target.value})
                    }
                />
            </div>
            <div className="reviewWrapper">
                <textarea 
                    value={form.text} 
                    className={classNames(styles['textareaForm'])}
                    placeholder='Review'
                    onChange={(e) => 
                        dispatch({type: "setText", payload: e.target.value})
                    }
                />
            </div>
            <div className={classNames(styles['ratingWrap'])}>
            <label style={{marginRight: '12px'}}>Rating:</label>
                <Counter
                    value={form.rating}
                    onIncrement={incrementRating}
                    onDecrement={decrementRating}
                />
                <input 
                    type="number"
                    min={1}
                    max={5}
                    value={form.rating}
                    style={{marginLeft: '12px'}}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        const safeValue = Math.min(5, Math.max(1, value || 1));
                        dispatch({ type: "setRating", payload:safeValue });
                    }}
                />
            </div>
            <div>
                <Button 
                    value="Clear"
                    variant="outline"
                    disabled={false}
                    size="s"
                    handler={handleClear}
                />
            </div>
        </form>
    )
}