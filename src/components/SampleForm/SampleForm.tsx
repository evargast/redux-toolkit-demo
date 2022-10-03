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
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormState, updateFormState } from "redux/formSlice";
import { RootState } from "redux/store";

const SampleForm: FC = () => {
    const formValues = useSelector((state: RootState) => state.formSlice);
    const dispatch = useDispatch();

    return (
        <Flex margin="size-400" direction="column">
            <h3 id="label-3">Cool random form</h3>
            <Form maxWidth="size-3600" aria-labelledby="label-3">
                <TextField
                    label="First Name"
                    value={formValues.name}
                    onChange={e =>
                        dispatch(updateFormState({ type: "name", value: e }))
                    }
                />
                <TextField
                    label="Last Name"
                    value={formValues.lastName}
                    onChange={e =>
                        dispatch(
                            updateFormState({ type: "lastName", value: e }),
                        )
                    }
                />
                <RadioGroup
                    label="Favorite pet"
                    value={formValues.animal}
                    onChange={e =>
                        dispatch(updateFormState({ type: "animal", value: e }))
                    }
                >
                    <Radio value="dogs">Dogs</Radio>
                    <Radio value="cats">Cats</Radio>
                    <Radio value="dragons">Dragons</Radio>
                </RadioGroup>

                <DateField
                    label="Event date"
                    value={formValues.date}
                    onChange={e =>
                        dispatch(updateFormState({ type: "date", value: e }))
                    }
                />

                <Picker
                    label="Choose frequency"
                    selectedKey={formValues.frequency}
                    onSelectionChange={e =>
                        dispatch(
                            updateFormState({
                                type: "frequency",
                                value: e as FormState["frequency"],
                            }),
                        )
                    }
                >
                    <Item key="rarely">Rarely</Item>
                    <Item key="sometimes">Sometimes</Item>
                    <Item key="always">Always</Item>
                </Picker>
            </Form>
        </Flex>
    );
};

export { SampleForm };
