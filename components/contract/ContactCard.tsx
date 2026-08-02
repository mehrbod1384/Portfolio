import Container from "../common/Container";

function ContactCard() {
  return (
    <section id="contact">
      <Container>
        <div className="flex items-center justify-center rounded-xl border border-(--line) bg-(--surface) p-4">
          <div className="text-center py-10 space-y-6">
            <h3 className="font-bold text-4xl">دنبال یه فرانت‌اند دولوپری؟</h3>
            <p className="text-(--muted)">
              برای فرصت‌های شغلی فول‌تایم یا همکاری.
            </p>
            <div className="space-x-4">
              <a
                href="https://github.com/mehrbod1384"
                className="inline-flex items-center justify-center rounded-lg bg-(--amber) px-6 py-3 font-semibold text-black transition hover:-translate-y-1 hover:brightness-110"
              >
                گیت هاب
              </a>

              <a
                href="https://www.linkedin.com/in/mehrbod-moteghaedi-2213a8426/"
                className="rounded-lg border border-(--line) px-6 py-3 transition hover:border-(--teal) hover:text-(--teal)"
              >
                لینکدین
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCard;
