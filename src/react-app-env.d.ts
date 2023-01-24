/// <reference types="react-scripts" />

declare global {
    type NotificationType = "success" | "info" | "warning" | "error";

    type TeamItemProps = {
        id: number,
        name: string,
        shortName: string,
        founded: number,
        crestUrl: string,
        venue: string,
        website: string,
        phone: string,
        address: string,
        email: string,
        clubColors: string;
    }
}

export { }