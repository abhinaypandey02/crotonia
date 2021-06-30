export default interface UserInterface {
    name: string;
    email: string;
    contestsParticipated:string[];
    contestReports:{
        contest:string;
        submittedQuestions:{
            level:number;
            attempts:number;
            timeStamp:number;
        }[]
    }[]
}
export const defaultUser:UserInterface={
    name:"",
    email:"",
    contestsParticipated:[],
    contestReports:[]
}
