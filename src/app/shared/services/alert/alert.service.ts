import { Injectable } from '@angular/core';
import Swal, { SweetAlertType, SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

    baseOptions: SweetAlertOptions = {
        customClass: {
            cancelButton: 'btn btn-light'
        },
        showCloseButton: false,
        buttonsStyling: false,
        confirmButtonText: 'Aceptar'
    };

    constructor() { }

    private alert(
        text: string,
        title: string,
        type: SweetAlertType,
        swalConfig: any,
        fireOptions?: any
    ) {
        const _fireOptions = {
            ...{
                title: title ? title : null,
                text: text ? text : null,
                type: null,
                allowOutsideClick: false,
                allowEscapeKey: false
            }, ...fireOptions
        };

        return swalConfig.fire(_fireOptions);
    }

    success(text: string = null, title?: string, options?: any): Promise<any> {
        const _options = { ...options, ...this.baseOptions }
        _options.customClass.confirmButton = 'btn btn-success mx-3';

        const icon = 'checkmark-circle-2-outline text-success';
        _options.html = `<div class="d-flex flex-column">
        <div class="my-2">
        <i class="eva eva-${icon} bg-light p-3 rounded-circle"></i>
        </div>
        <span class="text">${text}</span>
        </div>`;
        const swalConfig = Swal.mixin(_options);
        return this.alert(text, title, 'success', swalConfig);
    }

    info(text: string, title?: string, options?: any): Promise<any> {
        const _options = { ...options, ...this.baseOptions }
        _options.customClass.confirmButton = 'btn btn-primary mx-3';

        const icon = 'alert-circle-outline text-primary';
        _options.html = `<div class="d-flex flex-column">
        <div class="my-2">
        <i class="eva eva-${icon} bg-light p-3 rounded-circle"></i>
        </div>
        <span class="text">${text}</span>
        </div>`;
        const swalConfig = Swal.mixin(_options);
        return this.alert(text, title, 'info', swalConfig);
    }

    warning(text: string, title?: string, options?: any): Promise<any> {
        const _options = { ...options, ...this.baseOptions }
        _options.customClass.confirmButton = 'btn btn-warning mx-3';

        const icon = 'alert-triangle-outline text-warning';
        _options.html = `<div class="d-flex flex-column">
        <div class="my-2">
        <i class="eva eva-${icon} bg-light p-3 rounded-circle"></i>
        </div>
        <span class="text">${text}</span>
        </div>`;
        const swalConfig = Swal.mixin(_options);
        return this.alert(text, title, 'warning', swalConfig);
    }

    error(text: string, title?: string, options?: any): Promise<any> {
        const _options = { ...options, ...this.baseOptions }
        _options.customClass.confirmButton = 'btn btn-danger mx-3';

        const icon = 'checkmark-circle-2-outline text-success';
        _options.html = `<div class="d-flex flex-column">
        <div class="my-2">
        <i class="eva eva-${icon} bg-light p-3 rounded-circle"></i>
        </div>
        <span class="text">${text}</span>
        </div>`;
        const swalConfig = Swal.mixin(_options);
        return this.alert(text, title, 'error', swalConfig);
    }

    confirm(text: string, type: SweetAlertType, title?: string, options?: any): Promise<any> {
        const _options = { ...options, ...this.baseOptions }
        let icon = 'alert-circle-outline text-primary';
        switch (type) {
            case 'warning':
                _options.customClass.confirmButton = 'btn btn-warning mx-3';
                icon = 'alert-triangle-outline text-warning';
                break;
            case 'error':
                _options.customClass.confirmButton = 'btn btn-danger mx-3';
                icon = 'alert-triangle-outline text-danger';
                break;
            case 'success':
                _options.customClass.confirmButton = 'btn btn-success mx-3';
                icon = 'checkmark-circle-2-outline text-success';
                break;
            default:
                _options.customClass.confirmButton = 'btn btn-primary mx-3';
                break;
        }

        _options.html = `<div class="d-flex flex-column">
        <div class="my-2">
        <i class="eva eva-${icon} bg-light p-3 rounded-circle"></i>
        </div>
        <span class="text">${text}</span>
        </div>`;

        const swalConfig = Swal.mixin(_options);
        return Promise.resolve(
            this.alert(text, title, type, swalConfig, {
                showCancelButton: true,
                cancelButtonText:
                    'Cancelar',
            }).then(result => {
                return result.value;
            })
        );
    }

    close() {
        Swal.close();
    }
}
