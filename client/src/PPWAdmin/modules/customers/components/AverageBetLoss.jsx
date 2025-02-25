import React from "react";
import numberFormat from "../../../../helpers/numberFormat";

export function AverageBetLoss({ className, averagebetloss, currency }) {
    return (
        <div className={`card border-danger ${className} h-auto`}>
            <div className="card-body d-flex flex-column p-0 text-left ml-5 pt-3">
                <h5 className="card-title font-weight-bolder text-danger mb-0">
                    Average Bet Loss
                </h5>
                <h3 className="card-title font-weight-bolder text-danger my-2">
                    ${numberFormat(Number(averagebetloss).toFixed(2))} {currency}
                </h3>
            </div>
        </div>
    );
}
