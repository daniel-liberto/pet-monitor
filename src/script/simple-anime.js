export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        const time = Number(section.getAttribute('data-anime-time'));
        if (isSectionVisible) {
          if (!isNaN(time)) {
            setTimeout(() => {
              section.classList.add('ativo');
            }, time);
          }
        }
        // else if (section.classList.contains('ativo')) {
        //   section.classList.remove('ativo');
        // }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
// initAnimacaoScroll();
