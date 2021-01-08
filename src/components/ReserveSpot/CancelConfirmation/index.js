import { Button } from "theme-ui";
import { Lightbox, Back } from "./styles";

const CancelConfirmation = ({ onCancel, onClose }) => {
    return(
        <Lightbox>
            <div>
                <h2>Are you sure you want to cancel your reservation?</h2>
                <p>If you cancel now, you will charged a late cancellation fee of $19.99.</p>
                <div><Button variant="danger" onClick={onCancel}>Yes, cancel reservation</Button></div>
                <div><Back variant="link-secondary" onClick={onClose}>Go Back</Back></div>
            </div>
        </Lightbox>
    )
}

export default CancelConfirmation;