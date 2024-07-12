

export const fillWSIBForm = async(formData) => {
    const response = await fetch('http://localhost:3001/fill-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error filling the form:', errorData.error);
      return;
    }
  
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'WSIB_Form_Filled.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
  