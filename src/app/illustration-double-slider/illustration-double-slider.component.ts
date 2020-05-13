import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Options, ChangeContext } from 'ng5-slider';
import { IllustrationConfigService } from '../services/illustration-config.service';

@Component({
  selector: 'app-illustration-double-slider',
  templateUrl: './illustration-double-slider.component.html',
  styleUrls: ['./illustration-double-slider.component.scss']
})
export class IllustrationDoubleSliderComponent implements OnInit {

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

    illustrationConfigData;

    constructor(private currencyPipe: CurrencyPipe, private illustrationConfigService: IllustrationConfigService) { }

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

        this.illustrationConfigService.cast.subscribe(illustrationConfigData => this.illustrationConfigData = illustrationConfigData);
    }

    toggleData() {
        this.illustrationConfigService.setIllustrationData();
    }


}
