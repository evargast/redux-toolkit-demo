import {
    DateField,
    Flex,
    Form,
    Item,
    Picker,
    Radio,
    RadioGroup,
    TextField,
} from "@adobe/react-spectrum";
import { parseAbsoluteToLocal } from "@internationalized/date";
import React, { FC } from "react";

const SampleForm: FC = () => {
    return (
        <Flex margin="size-400" direction="column">
            <h3 id="label-3">Cool random form</h3>
            <Form maxWidth="size-3600" aria-labelledby="label-3">
                <TextField label="First Name" />
                <TextField label="Last Name" />
                <RadioGroup label="Favorite pet">
                    <Radio value="dogs">Dogs</Radio>
                    <Radio value="cats">Cats</Radio>
                    <Radio value="dragons">Dragons</Radio>
                </RadioGroup>

                <DateField
                    label="Event date"
                    defaultValue={parseAbsoluteToLocal("2021-11-07T07:45:00Z")}
                />

                <Picker label="Choose frequency">
                    <Item key="rarely">Rarely</Item>
                    <Item key="sometimes">Sometimes</Item>
                    <Item key="always">Always</Item>
                </Picker>
            </Form>
        </Flex>
    );
};

export { SampleForm };
