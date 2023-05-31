import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsServiceService {
  private urlgetstudentInfo ='http://localhost:5000/student/getProfile';
  private urlputStudentInfo ='http://localhost:5000/student/updateUser';
//settings Company
  private urlgetcompanyInfo ='http://localhost:5000/entreprise/getEntreprise';
  private urlputcompanyInfo ='http://localhost:5000/entreprise/updateCompny';

//get skill
private urlGetSkill ='http://localhost:5000/skills/getSkill';
private urlAddSkill ='http://localhost:5000/studentSkills/addskill';
private urlShowSkill ='http://localhost:5000/studentSkills/getMySkillsById';

//experience

private urlAddExperience ='http://localhost:5000/experience/addExperience';
private urlGetExperience ='http://localhost:5000/experience/get';

//project

private urlAddProject ='http://localhost:5000/project/addprojet';
private urlGetProject ='http://localhost:5000/project/getProject';


  constructor(private http: HttpClient) {}



  getUserById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlgetstudentInfo}/${id}`);
  }



  updateUser(user: user, id:any): Observable<user> {
    return this.http.put<user>(`${this.urlputStudentInfo}/${id}`, user);
  }


  //Company
  getCompanyById(id: string): Observable<user> {
    return this.http.get<user>(`${this.urlgetcompanyInfo}/${id}`);
  }



  updateCompany(user: user, id:any): Observable<user> {
    return this.http.put<user>(`${this.urlputcompanyInfo}/${id}`, user);
  }



  //skills
getSkills(): Observable<any> {
  return this.http.get<any>(this.urlGetSkill);
}

AddSkill(skillData: any): Observable<any> {
  return this.http.post<any>(this.urlAddSkill, skillData);
}

getMySkills(id:number):Observable<any> {
  return this.http.get<any>(`${this.urlShowSkill}/${id}`);
}
 

//experince

AddExperience(formData: any): Observable<any> {
  return this.http.post<any>(this.urlAddExperience, formData);
}

getMyExperience():Observable<any> {
  return this.http.get<any>(this.urlGetExperience);
}



//project

AddProject(formData: any): Observable<any> {
  return this.http.post<any>(this.urlAddProject, formData);
}

getMyProject():Observable<any> {
  return this.http.get<any>(this.urlGetProject);
}
}
