/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";

export function MixedWidget12({ className }) {
    return (
        <div className={`card card-custom ${className}`}>
            {/* begin::Body */}
            <div className="card-body d-flex flex-column">
                <div className="flex-grow-1 pb-5">
                    {/* begin::Info */}
                    <div className="d-flex align-items-center pr-2 mb-6">
                        <span className="text-muted font-weight-bold font-size-lg flex-grow-1">
                            5 Weeks Ago
            </span>
                        <div className="symbol symbol-50">
                            <span className="symbol-label bg-light-light">
                                <SVG
                                    src="/media/svg/misc/003-puzzle.svg"
                                    className="h-50 align-self-center"
                                ></SVG>{" "}
                            </span>
                        </div>
                    </div>
                    {/* end::Info */}

                    {/* begin::Link */}
                    <a
                        href="#"
                        className="text-dark font-weight-bolder text-hover-primary font-size-h4"
                    >
                        KT.com - High Quality
            <br />
            Templates
          </a>
                    {/* end::Link */}

                    {/* begin::Desc */}
                    <p className="text-dark-50 font-weight-normal font-size-lg mt-6">
                        Easy to use, incredibly flexible and secure
            <br />
            with in-depth documentation that outlines
            <br />
            everything for you
          </p>
                    {/* end::Desc */}
                </div>
                {/* begin::Team */}
                <div className="d-flex align-items-center">
                    {/* begin::Pic */}
                    <a href="#" className="symbol symbol-45 symbol-light mr-3">
                        <div className="symbol-label">
                            <SVG
                                src="/media/svg/avatars/001-boy.svg"
                                className="h-75 align-self-end"
                            ></SVG>
                        </div>
                    </a>
                    {/* end::Pic */}

                    {/* begin::Pic */}
                    <a href="#" className="symbol symbol-45 symbol-light mr-3">
                        <div className="symbol-label">
                            <SVG
                                src="/media/svg/avatars/028-girl-16.svg"
                                className="h-75 align-self-end"
                            ></SVG>
                        </div>
                    </a>
                    {/* end::Pic */}

                    {/* begin::Pic */}
                    <a href="#" className="symbol symbol-45 symbol-light">
                        <div className="symbol-label">
                            <SVG
                                src="/media/svg/avatars/024-boy-9.svg"
                                className="h-75 align-self-end"
                            ></SVG>
                        </div>
                    </a>
                    {/* end::Pic */}
                </div>
                {/* end::Team */}
            </div>
            {/* end::Body */}
        </div>
    );
}