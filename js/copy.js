// Unfehlbarer, eigenständiger Copy-Button Script
window.addEventListener('load', function() {
    function addCopyButtons() {
        document.querySelectorAll('pre').forEach(function(codeBlock) {
            // Abbrechen, wenn schon ein Button existiert
            if (codeBlock.querySelector('.custom-copy-btn')) return;

            // Button erstellen
            var button = document.createElement('button');
            button.className = 'custom-copy-btn';
            button.type = 'button';
            button.innerText = 'Kopieren';

            // Styling direkt per JS erzwingen, um CSS-Blockaden zu umgehen
            button.style.position = 'absolute';
            button.style.top = '8px';
            button.style.right = '8px';
            button.style.zIndex = '9999';
            button.style.padding = '4px 8px';
            button.style.fontSize = '12px';
            button.style.border = '1px solid #88888840';
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            button.style.backgroundColor = 'var(--code-bg, #f6f8fa)';
            button.style.color = 'var(--content, #111)';
            button.style.fontFamily = 'sans-serif';

            // Box vorbereiten und Button einfügen
            codeBlock.style.position = 'relative';
            codeBlock.appendChild(button);

            // Klick-Event
            button.addEventListener('click', function() {
                var codeEl = codeBlock.querySelector('code');
                var text = codeEl ? codeEl.innerText : codeBlock.innerText;

                // Falls das Wort "Kopieren" am Ende mitgelesen wird, abschneiden
                if (text.endsWith('Kopieren')) {
                    text = text.slice(0, -8);
                }

                navigator.clipboard.writeText(text).then(function() {
                    button.innerText = 'Kopiert!';
                    button.style.backgroundColor = '#2ea043';
                    button.style.color = '#ffffff';
                    setTimeout(function() {
                        button.innerText = 'Kopieren';
                        button.style.backgroundColor = 'var(--code-bg, #f6f8fa)';
                        button.style.color = 'var(--content, #111)';
                    }, 2000);
                });
            });
        });
    }

    // Kurz warten, falls andere Skripte das DOM noch verändern
    setTimeout(addCopyButtons, 200);
});
