import { environment } from "src/environments/environment";

export class ApiConfig {
  public get baseUrl(): string {
    return environment.baseUrl;
  }
}