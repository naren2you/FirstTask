import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users_list: Array<string> = [
    "Naren",
    "keerthi",
    "mirthu",
    "kaviya",
    "bala",
    "karthik",
    "raji"
  ];
  constructor() {}

  ngOnInit() {}
}
