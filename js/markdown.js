function parseMarkdown(markdownText) {
    let htmlText = markdownText;

    // Replace headers
    htmlText = htmlText.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    htmlText = htmlText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    htmlText = htmlText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    htmlText = htmlText.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    htmlText = htmlText.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
    htmlText = htmlText.replace(/^###### (.*$)/gim, '<h6>$1</h6>');

    // Replace bold
    htmlText = htmlText.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');

    // Replace italic
    htmlText = htmlText.replace(/\*(.*)\*/gim, '<i>$1</i>');

    // Replace blockquote
    htmlText = htmlText.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

    // Replace horizontal rule
    htmlText = htmlText.replace(/---/gim, '<hr />');

    // Replace link
    htmlText = htmlText.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

    // Replace list
    htmlText = htmlText.replace(/^\*(.*)/gim, '<ul><li>$1</li></ul>');

    // Replace numbered list
    htmlText = htmlText.replace(/^\d\.(.*)/gim, '<ol><li>$1</li></ol>');

    // Replace code block
    htmlText = htmlText.replace(/```([^`]+)```/gim, '<pre><code>$1</code></pre>');

    // Replace inline code
    htmlText = htmlText.replace(/`(.*?)`/gim, '<code>$1</code>');

    // Replace paragraph
    htmlText = htmlText.replace(/\n$/gim, '<br />');

    return htmlText.trim();
}

async function fetchAndParseMarkdown(file) {
    const response = await fetch(file);
    const markdown = await response.text();
    return parseMarkdown(markdown);
}

async function fetchMarkdownFiles() {
    const response = await fetch('posts.json'); // Fetch the JSON file
    return response.json();
}

async function loadPosts() {
    const postLinksDiv = document.getElementById('post-links');
    const posts = await fetchMarkdownFiles(); // Fetch the list of markdown files

    for (const post of posts) {
        // Assuming the HTML files are named the same as the markdown files but with .html extension
        const postHtmlFile = post.replace('.md', '.html');
        
        // Create a link for each post
        const link = document.createElement('a');
        link.href = `posts/${postHtmlFile}`; // Link to the HTML file
        link.innerHTML = post.split('.')[0]; // Use the file name (without extension) as the link text
        postLinksDiv.appendChild(link);
    }
}

function displayPost(postHtml) {
    const postContentDiv = document.getElementById('post-content');
    postContentDiv.innerHTML = postHtml;
}

window.onload = loadPosts;