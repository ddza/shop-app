const TextRow = ({ children }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
                { children }
            </div>
        </div>
    );
} 
export default TextRow;