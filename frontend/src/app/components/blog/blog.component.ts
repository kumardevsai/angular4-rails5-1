import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [ CommonService ]
})
export class BlogComponent implements OnInit {
  list: any = [];
  limit: number = 5;

  constructor(private commonService: CommonService) { }

  ngOnInit () {
    this.commonService.getUsers().subscribe((response) => {
      this.list = response;
    }, error => {
        console.log(error);
    })
  }

  tuanna (event) {
    if (this.limit < this.list.length) {
      this.limit += 5;
    }
  }
}
