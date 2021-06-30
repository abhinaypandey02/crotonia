export default interface Contest{
    id:string;
    from:number;
    to:number;
    questionBank:{
        id:string;
        question:string;
        answer:string;
        level:number;
    }[];
}