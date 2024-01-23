import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const AuthorsTitle = () => {
  const record = useRecordContext();
  return <span>Authors {record ? `"${ record.Authorname }"` : ""}</span>;
};

export const AuthorsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Authorname" />
<TextField source="Dateofbirth" />
<TextField source="Gender" />
<TextField source="Countryofbirth" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AuthorsEdit = () => (
                    <Edit title={<AuthorsTitle />}>
                      <SimpleForm>
                          <TextInput source="Authorname"   />
<TextInput source="Dateofbirth"   />
<TextInput source="Gender"   />
<TextInput source="Countryofbirth"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AuthorsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Authorname"   />
<TextInput source="Dateofbirth"   />
<TextInput source="Gender"   />
<TextInput source="Countryofbirth"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


