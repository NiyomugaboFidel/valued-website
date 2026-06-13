import { useState, type FormEvent } from 'react';
import { Button } from './Button';

type ContactFormProps = {
  action: string;
  fields?: 'contact' | 'apply' | 'join';
};

export function ContactForm({ action, fields = 'contact' }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputClass} name="fullName" placeholder="Full Name" required />
        <input className={inputClass} type="email" name="email" placeholder="Email Address" required />
      </div>

      {(fields === 'contact' || fields === 'join') && (
        <input className={inputClass} type="tel" name="phone" placeholder="Phone Number" />
      )}

      {fields === 'contact' && (
        <input className={inputClass} name="subject" placeholder="Subject" />
      )}

      {(fields === 'apply' || fields === 'join') && (
        <select className={inputClass} name={fields === 'apply' ? 'track' : 'program'} required defaultValue="">
          <option value="" disabled>
            {fields === 'apply' ? 'Select Track' : 'Select Program'}
          </option>
          {fields === 'apply' ? (
            <>
              <option>Traditional Dance</option>
              <option>Modern Dance</option>
              <option>Language</option>
              <option>Fashion</option>
              <option>Drama</option>
              <option>Arts</option>
              <option>Football</option>
            </>
          ) : (
            <>
              <option value="traditional">Traditional Dance</option>
              <option value="modern">Modern Dance</option>
              <option value="football">Football</option>
              <option value="drama">Drama</option>
              <option value="arts">Arts</option>
              <option value="language">Language</option>
              <option value="fashion">Fashion</option>
            </>
          )}
        </select>
      )}

      <textarea
        className={`${inputClass} resize-none`}
        name={fields === 'apply' ? 'goals' : 'message'}
        rows={4}
        placeholder={fields === 'apply' ? 'Tell us about your goals...' : 'Your message'}
        required
      />

      <Button type="submit" className="w-full sm:w-auto" size="md">
        {loading ? 'Sending...' : fields === 'apply' ? 'Submit Application' : 'Send Message'}
      </Button>

      {sent && (
        <p className="text-sm font-medium text-green-600">
          Your message has been sent successfully!
        </p>
      )}
    </form>
  );
}
