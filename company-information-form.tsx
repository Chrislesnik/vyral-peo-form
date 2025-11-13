"use client";

import type {InputProps, SelectProps} from "@heroui/react";

import React from "react";
import {Input, Select, SelectItem} from "@heroui/react";
import {cn} from "@heroui/react";

import companyTypes from "./company-types";
import states from "./states";
import companyIndustries from "./company-industries";

export type CompanyInformationFormProps = React.HTMLAttributes<HTMLFormElement>;

const CompanyInformationForm = React.forwardRef<HTMLFormElement, CompanyInformationFormProps>(
  ({className, ...props}, ref) => {
    const inputProps: Pick<InputProps, "labelPlacement" | "classNames"> = {
      labelPlacement: "outside",
      classNames: {
        label:
          "text-small font-medium text-default-700 group-data-[filled-within=true]:text-default-700",
      },
    };

    const selectProps: Pick<SelectProps, "labelPlacement" | "classNames"> = {
      labelPlacement: "outside",
      classNames: {
        label: "text-small font-medium text-default-700 group-data-[filled=true]:text-default-700",
      },
    };

    return (
      <>
        <div className="text-default-foreground text-3xl leading-9 font-bold">
          Company Information
        </div>
        <div className="text-default-500 py-4">
          Please provide the information for your incorporated company
        </div>
        <form
          ref={ref}
          className={cn("flex grid grid-cols-12 flex-col gap-4 py-8", className)}
          {...props}
        >
          <Select
            className="col-span-12 md:col-span-6"
            items={companyTypes}
            label={
              <span>
                Company Type <span className="text-red-500">*</span>
              </span>
            }
            name="company-type"
            placeholder="C Corporation"
            isRequired
            {...selectProps}
          >
            {(companyType) => <SelectItem key={companyType.value}>{companyType.title}</SelectItem>}
          </Select>

          <Select
            className="col-span-12 md:col-span-6"
            items={states}
            label={
              <span>
                Registration State <span className="text-red-500">*</span>
              </span>
            }
            name="registration-state"
            placeholder="Delaware"
            isRequired
            {...selectProps}
          >
            {(registrationState) => (
              <SelectItem key={registrationState.value}>{registrationState.title}</SelectItem>
            )}
          </Select>

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                Company Name <span className="text-red-500">*</span>
              </span>
            }
            name="company-name"
            placeholder="Type your company name here"
            isRequired
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                Entity Ending <span className="text-red-500">*</span>
              </span>
            }
            name="entity-ending"
            placeholder="Inc."
            isRequired
            {...inputProps}
          />

          <Select
            className="col-span-12"
            items={companyIndustries}
            label={
              <span>
                Company Industry <span className="text-red-500">*</span>
              </span>
            }
            name="company-industry"
            placeholder="B2C SaaS"
            isRequired
            {...selectProps}
          >
            {(companyIndustry) => (
              <SelectItem key={companyIndustry.value}>{companyIndustry.title}</SelectItem>
            )}
          </Select>

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                Street Name <span className="text-red-500">*</span>
              </span>
            }
            name="street-name"
            placeholder="Geary 2234"
            isRequired
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                Suite <span className="text-red-500">*</span>
              </span>
            }
            name="suite"
            placeholder="#166"
            isRequired
            {...inputProps}
          />

          <Select
            className="col-span-12 md:col-span-4"
            items={states}
            label={
              <span>
                State <span className="text-red-500">*</span>
              </span>
            }
            name="state"
            placeholder="Delaware"
            isRequired
            {...selectProps}
          >
            {(registrationState) => (
              <SelectItem key={registrationState.value}>{registrationState.title}</SelectItem>
            )}
          </Select>

          <Input
            className="col-span-12 md:col-span-4"
            label={
              <span>
                City <span className="text-red-500">*</span>
              </span>
            }
            name="city"
            placeholder="San Francisco"
            isRequired
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-4"
            label={
              <span>
                Zip Code <span className="text-red-500">*</span>
              </span>
            }
            name="zip-code"
            placeholder="9409"
            isRequired
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                EIN <span className="text-red-500">*</span>
              </span>
            }
            name="ein"
            placeholder="Type your company EIN here"
            isRequired
            {...inputProps}
          />

          <Input
            className="col-span-12 md:col-span-6"
            label={
              <span>
                Confirm EIN <span className="text-red-500">*</span>
              </span>
            }
            name="confirm-ein"
            placeholder="Confirm your company EIN here"
            isRequired
            {...inputProps}
          />
        </form>
      </>
    );
  },
);

CompanyInformationForm.displayName = "CompanyInformationForm";

export default CompanyInformationForm;
