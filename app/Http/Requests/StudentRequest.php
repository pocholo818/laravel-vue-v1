<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiRequestManager;

class StudentRequest extends ApiRequestManager
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // $id = $this->route('id') ?: 0;

        $rules = [
            'name' => 'required|regex:/^[\pL\s\-]+$/u',
            'address' => 'required',
            'phone' => 'required|regex:/(09)[0-9]{9}/'
        ];

        // if(!$id){
        //     $rules['password'] = 'required|confirmed|password_format';
        //     $rules['password_confirmation'] = 'required';
        // }

        return $rules;
    }

    public function messages(){
        return [
            "required" => "The :attribute field is required.",
            "regex" => "The :attribute only accepts letters and spaces.",
            "phone.regex" => "The :attribute must be a valid phone number.",
        ];
    }
}

