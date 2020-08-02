export default interface TaskModel {
    id: number | null;
    name: string | null;
    children?: TaskModel[];
}
