import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer = new Customer();
    private initialData: object;

    constructor(private fb: FormBuilder) { }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ', JSON.stringify(this.customerForm.value));
    }

    ngOnInit(): void {
        this.initialData = {
            firstName: '',
            lastName: '',
            email: '',
            sendCatalog: { value: true, disabled: false }
        };
        this.customerForm = this.fb.group(this.initialData);
    }

    populateTestData(): void {
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            email: 'jack@torchwood.com',
            sendCatalog: false
        });
    }

    populateTestSubData(): void {
        this.customerForm.patchValue({
            firstName: 'Jackie'
        });
    }

    clearForm(): void {
        this.customerForm.setValue(this.initialData);
    }
 }
