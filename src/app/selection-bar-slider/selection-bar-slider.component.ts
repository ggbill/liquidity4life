import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Options, ChangeContext } from 'ng5-slider';

@Component({
    selector: 'app-selection-bar-slider',
    templateUrl: './selection-bar-slider.component.html',
    styleUrls: ['./selection-bar-slider.component.scss']
})
export class SelectionBarSliderComponent {

    @Input() value: number;
    @Input() defaultValue: number;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() prefix: string;
    @Input() customSteps: string;

    // value: number;
    options: Options = {
        showSelectionBar: true,
    };

    constructor(private currencyPipe: CurrencyPipe) { }

    private customStepsSplit: string[];


    ngOnInit() {
        if (this.prefix == 'gbp') {
            this.options.translate = (value: number): string => {
                return this.currencyPipe.transform(value, 'GBP', 'symbol-narrow', '1.0');
            }
        } else if (this.prefix == 'percent') {
            this.options.translate = (value: number): string => {
                return value + '%';
            }

        }


        if (this.customSteps != null) {
            this.options.stepsArray = [];
            this.customStepsSplit = this.customSteps.split(',');
            this.customStepsSplit.forEach(element => {
                this.options.stepsArray.push({ value: Number(element) });
            })
            this.options.showTicksValues = true;
        };

        this.value = this.defaultValue;
        this.options.floor = this.min;
        this.options.ceil = this.max;
        this.options.step = this.step;
    }


}
