//declare module 'react-admin';
//import Re from 'react-admin';
import React, { FunctionComponent } from 'react'
//import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

declare namespace ra {
  type ResourceType = {
    name: string;
    list?: object;
    edit?: object;
    create?: object;
    icon?: object;
  }

  export const Resource: FunctionComponent<ResourceType> = () => {}

  type AdminType = {
    dataProvider: string | object
  }

  export const Admin: FunctionComponent<AdminType> = () => {}

  type TextFieldType = {
    source: string
  }

  export const TextField: FunctionComponent<TextFieldType>

  type DateFieldType = {
    source: string
  }

  export const DateField: FunctionComponent<DateFieldType>

  type TextInputType = {
    disabled?: boolean | null
    source: string
    options?: {
      multiLine: boolean
    }
    label?: string
    multiline?: boolean | null
  }

  export const TextInput: FunctionComponent<TextInputType> = () => {}

  type DateInputType = {
    label?: string
    source?: string
  }

  export const DateInput: FunctionComponent<DateInputType> = () => {}

  type EditButtonType = {
    basePath: string
  }

  export const EditButton: FunctionComponent<EditButtonType> = () => {}

  export const SimpleForm: FunctionComponent

  export const Datagrid: FunctionComponent

  export const List: FunctionComponent

  type CreateType = {
    title: string;
  }

  export const Create: FunctionComponent<CreateType>

  type EditType = {
    title: object
  }

  export const Edit: FunctionComponent<EditType>

}

export = ra;

