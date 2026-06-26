import PropTypes from 'prop-types';
import useInput from '../hooks/UseInput';

function CommentInput({addComment}){
    const[content, onContentChange, resetContent] = useInput('');
    function onSubmit(e){
        e.preventDefault();
        addComment({
            content,
        });
        resetContent();
    }
    return(
        <form onSubmit={onSubmit}>
            <textarea
            placeholder="Tulis komentar..."
            value={content}
            onChange={onContentChange}
            />
            <button
            type="submit"
            >
            Kirim
            </button>
        </form>
    );
    }
CommentInput.propTypes={
addComment:
PropTypes.func.isRequired,
};

export default CommentInput;