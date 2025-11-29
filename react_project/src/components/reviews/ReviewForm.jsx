import { useReducer } from 'react';
import { Counter } from "../counter/Counter";

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
        <form onSubmit={handleSubmit} className="review__form">
            <div className="review__form-item">
                <label>Name</label>
                <input 
                    type="text" 
                    value={form.name} 
                    onChange={(e) => 
                        dispatch({type: "setName", payload: e.target.value})
                    }
                />
            </div>
            <div className="review__form-item">
                <label>Review</label>
                <textarea 
                    value={form.text} 
                    onChange={(e) => 
                        dispatch({type: "setText", payload: e.target.value})
                    }
                />
            </div>
            <div className="review__form-item">
                <label>Rating</label>
                <input 
                    type="number"
                    min={1}
                    max={5}
                    value={form.rating} 
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        const safeValue = Math.min(5, Math.max(1, value || 1));
                        dispatch({ type: "setRating", payload:safeValue });
                    }}
                />
            </div>
            <div className="review__form-rating">
                <label>Rating</label>
                <Counter
                value={form.rating}
                onIncrement={incrementRating}
                onDecrement={decrementRating}
                />
            </div>
            <div className='review__form-actions'>
                <button type="button" onClick={handleClear}>Clear</button>
            </div>
        </form>
    )
}