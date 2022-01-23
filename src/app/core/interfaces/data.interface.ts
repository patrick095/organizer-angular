export interface DataObject {
    id: string;
    title: string;
    description: string;
    type: string;
    date: Date;
    theme: string;
    position: PositionInterface;
}

export interface PositionInterface {
    x: number;
    y: number;
}
