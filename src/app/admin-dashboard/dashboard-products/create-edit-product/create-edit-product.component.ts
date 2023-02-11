import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmitType, detach, isNullOrUndefined } from '@syncfusion/ej2-base';
import { UploaderComponent, RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss']
})
export class CreateEditProductComponent implements OnInit {


  category = [];
  constructor(private http: HttpClient) { }

  @ViewChild('chunkupload') chunkupload: UploaderComponent;
  @ViewChild('sample')
  public listObj: DropDownListComponent;
  // define the JSON of data
  public chunkData: Object[] = [
    { value: '500000', size: '500 KB' },
    { value: '1000000', size: '1 MB' },
    { value: '2000000', size: '2 MB' }
  ];
  public fields: Object = { text: 'size', value: 'value' };
  // set the placeholder to DropDownList input element
  public waterMark: string = 'Select chunk size';
  // set the value to select an item based on mapped value at initial rendering
  public value: string = '500000';
  public path: Object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    chunkSize: 500000
  };

  public onChange(args: ChangeEventArgs): void {
    this.chunkupload.asyncSettings.chunkSize = parseInt(args.itemData.value);
  }

  public onFileRemove(args: RemovingEventArgs): void {
    args.postRawFile = false;
  }

  public isInteraction: boolean = false;
  // to update flag variable value for automatic pause and resume
  public onPausing(args: any): void {
    if (args.event !== null && !navigator.onLine) {
      this.isInteraction = true;
    } else {
      this.isInteraction = false;
    }
  }
  // to update flag variable value for automatic pause and resume
  public onResuming(args: any): void {
    if (args.event !== null && !navigator.onLine) {
      this.isInteraction = true;
    } else {
      this.isInteraction = false;
    }
  }

  public dropElement: HTMLElement = document.getElementsByClassName('control-section')[0] as HTMLElement;
  // to prevent triggering chunk-upload failure event and to pause uploading on network failure
  public onBeforefailure(args: any): void {
    let proxy: any = this;
    args.cancel = !this.isInteraction;
    /* tslint:disable */
    // interval to check network availability on every 500 milliseconds
    let clearTimeInterval: any = setInterval(() => {
      if (navigator.onLine && !isNullOrUndefined(proxy.chunkupload.filesData[0]) && proxy.chunkupload.filesData[0].statusCode == 4) {
        proxy.chunkupload.resume(proxy.chunkupload.filesData);
        clearSetInterval();
      } else {
        if (!proxy.isInteraction && !isNullOrUndefined(proxy.chunkupload.filesData[0]) && proxy.chunkupload.filesData[0].statusCode == 3) {
          proxy.chunkupload.pause(proxy.chunkupload.filesData);
        }
      }
    }, 500);
    // clear Interval after when network is available.
    function clearSetInterval(): void {
      clearInterval(clearTimeInterval);
    }
  }


  ngOnInit(): void {
  }

}
