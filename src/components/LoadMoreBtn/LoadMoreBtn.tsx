import React from "react";
import Button from "../Button/Button";
import arrow from '../../images/arrow.svg';


interface ILoadMoreBtn {
    handleLoadMore: () => void,
    disabled: boolean
}

const LoadMoreBtn:React.FC<ILoadMoreBtn> = ({handleLoadMore, disabled}) => {


        return (
            <Button onClick={handleLoadMore} icon={arrow} disabled={disabled}>Load more</Button>
        )
    }

export default LoadMoreBtn;