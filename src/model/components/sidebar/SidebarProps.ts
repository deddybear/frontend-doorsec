import {BoxProps} from "@chakra-ui/react";
import {IconType} from "react-icons";

export interface SidebarProps extends BoxProps {
    onClose: () => void
}

export interface LinkItemProps {
    name: string,
    icon: IconType
}