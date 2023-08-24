import {FlexProps} from "@chakra-ui/react";
import {IconType} from "react-icons";

export default interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
    path: string
}