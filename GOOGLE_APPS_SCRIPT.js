// ID da planilha
const SPREADSHEET_ID = '19qL1gaH6XHzefEPiNArNEeaHnJTmCqxefRwDXUY7cXk';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName('Leads');

    // Criar aba se não existir
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Leads');
      sheet.appendRow([
        'Data/Hora',
        'Nome',
        'WhatsApp',
        'Nível de Escolaridade',
        'Curso Desejado',
        'Observações',
        'Status do Lead',
        'ID do Lead',
        'Data de Contato',
        'Status do Atendimento'
      ]);

      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange
        .setBackground('#0f172a')
        .setFontColor('#ffffff')
        .setFontWeight('bold')
        .setHorizontalAlignment('center');
    }

    const action = data.action || 'insert';

    if (action === 'update') {
      // ========= ATUALIZAR LEAD =========
      const leadId = data.leadId;
      if (!leadId) throw new Error('leadId não fornecido');

      const rows = sheet.getDataRange().getValues();
      let rowIndex = -1;

      for (let i = 1; i < rows.length; i++) {
        if (rows[i][7] === leadId) { // coluna ID do Lead
          rowIndex = i + 1;
          break;
        }
      }

      if (rowIndex === -1) throw new Error('Lead não encontrado: ' + leadId);

      if (data.statusLead)
        sheet.getRange(rowIndex, 7).setValue(data.statusLead);

      if (data.contactDate)
        sheet.getRange(rowIndex, 9).setValue(data.contactDate);

      if (data.attendanceStatus)
        sheet.getRange(rowIndex, 10).setValue(data.attendanceStatus);

      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Lead atualizado',
          leadId: leadId,
          timestamp: new Date().toISOString()
        }))
        .setMimeType(ContentService.MimeType.JSON);

    } else {
      // ========= INSERIR NOVO LEAD =========

      if (!data.name || !data.phone) {
        throw new Error('Nome e telefone são obrigatórios');
      }

      const leadId = 'LEAD-' +
        Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyyMMdd-HHmmss') +
        '-' + Math.floor(Math.random() * 1000);

      const rowData = [
        new Date(),
        data.name,
        data.phone,
        data.educationLevel || 'Não informado',
        data.desiredCourse || 'Não informado',
        data.observations || '',
        'Novo',
        leadId,
        '',
        'Pendente'
      ];

      sheet.appendRow(rowData);

      const lastRow = sheet.getLastRow();
      const newRowRange = sheet.getRange(lastRow, 1, 1, 10);

      newRowRange.setBackground(lastRow % 2 === 0 ? '#f8fafc' : '#ffffff');
      sheet.getRange(lastRow, 1).setNumberFormat('dd/mm/yyyy HH:mm:ss');
      sheet.autoResizeColumns(1, 10);

      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Lead registrado com sucesso',
          leadId: leadId,
          timestamp: new Date().toISOString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'online',
      message: 'Webhook Mentoria Medicina funcionando!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
