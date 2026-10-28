import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { complianceSchema } from '../schemas/complianceSchema';
import { useState } from 'react';

export default function ComplianceWizard() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: zodResolver(complianceSchema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log("Validated Form Submission:", data);
    alert("Compliance submission processed successfully!");
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <h2 className="text-xl font-bold mb-6 text-slate-800">Regulatory Submission Wizard</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-600">Step 1: General Information</h3>
            <div>
              <label className="block text-sm font-medium text-slate-700">Company Name</label>
              <input {...register("companyName")} className="mt-1 w-full p-2.5 border rounded-lg border-slate-300" />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Registration Number</label>
              <input {...register("registrationNumber")} placeholder="e.g. ABC1234" className="mt-1 w-full p-2.5 border rounded-lg border-slate-300" />
              {errors.registrationNumber && <p className="text-red-500 text-xs mt-1">{errors.registrationNumber.message}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-600">Step 2: Operational Metrics & Verification</h3>
            <div>
              <label className="block text-sm font-medium text-slate-700">Sector</label>
              <select {...register("sector")} className="mt-1 w-full p-2.5 border rounded-lg border-slate-300">
                <option value="Mining">Mining</option>
                <option value="Energy">Energy</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Logistics">Logistics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Environmental Impact Score</label>
              <input type="number" {...register("environmentalMetric")} className="mt-1 w-full p-2.5 border rounded-lg border-slate-300" />
              {errors.environmentalMetric && <p className="text-red-500 text-xs mt-1">{errors.environmentalMetric.message}</p>}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" {...register("declarationAccepted")} id="declaration" className="w-4 h-4" />
              <label htmlFor="declaration" className="text-sm text-slate-700">I certify that all statements provided are true and verified.</label>
            </div>
            {errors.declarationAccepted && <p className="text-red-500 text-xs">{errors.declarationAccepted.message}</p>}
          </div>
        )}

        <div className="flex justify-between pt-4 border-t border-slate-200">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 border rounded-lg text-slate-600 hover:bg-slate-100">
              Back
            </button>
          )}
          {step < 2 ? (
            <button type="button" onClick={async () => {
              const valid = await trigger(["companyName", "registrationNumber"]);
              if (valid) setStep(2);
            }} className="ml-auto px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Next Step
            </button>
          ) : (
            <button type="submit" className="ml-auto px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
              Submit Audit File
            </button>
          )}
        </div>
      </form>
    </div>
  );
}