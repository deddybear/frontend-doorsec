import {ReactNode} from "react";

export default interface CardProps {
    headerCard: null | ReactNode | ReactNode[],
    bodyCard: null | ReactNode | ReactNode[],
    footerCard: null | ReactNode | ReactNode[]
}