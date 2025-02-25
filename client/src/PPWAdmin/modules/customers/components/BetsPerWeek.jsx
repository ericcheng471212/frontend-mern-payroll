import React from "react";
import numberFormat from "../../../../helpers/numberFormat";

export function BetsPerWeek({ className, betsperweek, currency }) {
    return (
        <div className={`card border-warning ${className} h-auto`}>
            <div className="card-body d-flex flex-column p-0 text-left ml-5 pt-3">
                <h5 className="card-title font-weight-bolder text-warning mb-0">
                    Frequency Bets Per Week
                </h5>
                <h3 className="card-title font-weight-bolder text-warning my-2">
                    {numberFormat(Number(betsperweek).toFixed(2))} Bets
                </h3>
            </div>
        </div>
    );
}
