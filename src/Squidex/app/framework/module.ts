﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    AutocompleteComponent,
    ClipboardService,
    CloakDirective,
    ControlErrorsComponent,
    CopyDirective,
    DateTimeEditorComponent,
    DayOfWeekPipe,
    DayPipe,
    DisplayNamePipe,
    DurationPipe,
    FileDropDirective,
    FocusOnChangeDirective,
    FocusOnInitDirective,
    FromNowPipe,
    GeolocationEditorComponent,
    HideInvalidImage,
    IndeterminateValueDirective,
    JsonEditorComponent,
    LocalStoreService,
    LowerCaseInputDirective,
    MarkdownEditorComponent,
    MessageBus,
    ModalViewDirective,
    MoneyPipe,
    MonthPipe,
    NotificationService,
    PanelContainerDirective,
    PanelComponent,
    PanelService,
    ResourceLoaderService,
    RichEditorComponent,
    ScrollActiveDirective,
    ShortcutComponent,
    ShortcutService,
    ShortDatePipe,
    ShortTimePipe,
    SliderComponent,
    StarsComponent,
    TagEditorComponent,
    TitleService,
    TitleComponent,
    ToggleComponent,
    UserReportComponent
} from './declarations';

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        AutocompleteComponent,
        CloakDirective,
        ControlErrorsComponent,
        CopyDirective,
        DateTimeEditorComponent,
        DayOfWeekPipe,
        DayPipe,
        DisplayNamePipe,
        DurationPipe,
        FileDropDirective,
        FocusOnChangeDirective,
        FocusOnInitDirective,
        FromNowPipe,
        GeolocationEditorComponent,
        HideInvalidImage,
        IndeterminateValueDirective,
        JsonEditorComponent,
        LowerCaseInputDirective,
        MarkdownEditorComponent,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        PanelContainerDirective,
        PanelComponent,
        RichEditorComponent,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SliderComponent,
        StarsComponent,
        TagEditorComponent,
        TitleComponent,
        ToggleComponent,
        UserReportComponent
    ],
    exports: [
        AutocompleteComponent,
        CloakDirective,
        ControlErrorsComponent,
        CopyDirective,
        DateTimeEditorComponent,
        DayOfWeekPipe,
        DayPipe,
        DisplayNamePipe,
        DurationPipe,
        FileDropDirective,
        FocusOnChangeDirective,
        FocusOnInitDirective,
        FromNowPipe,
        GeolocationEditorComponent,
        HideInvalidImage,
        IndeterminateValueDirective,
        JsonEditorComponent,
        LowerCaseInputDirective,
        MarkdownEditorComponent,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        PanelContainerDirective,
        PanelComponent,
        RichEditorComponent,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SliderComponent,
        StarsComponent,
        TagEditorComponent,
        TitleComponent,
        ToggleComponent,
        UserReportComponent,
        HttpModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class SqxFrameworkModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxFrameworkModule,
            providers: [
                ClipboardService,
                LocalStoreService,
                MessageBus,
                NotificationService,
                PanelService,
                ResourceLoaderService,
                ShortcutService,
                TitleService
            ]
        };
    }
 }