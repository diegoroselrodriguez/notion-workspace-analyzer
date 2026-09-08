export interface Page {
    id: string;
    title: string;
    url: string;
    parentType: string;
    parentId?: string;
    lastEditedTime: string;
}